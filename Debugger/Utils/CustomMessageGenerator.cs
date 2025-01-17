using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using UnityEditor;
using UnityEngine;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

public class CustomMessageGenerator {

    public string yamlFilePath;
    public string outputDirectory;

    public CustomMessageGenerator(string filePath, string outputPath) {
        yamlFilePath = filePath == null? Path.Combine(Application.dataPath, @"Scenes/NewHacks2024/Debugger/Utils/EventConfig.yaml") : filePath;
        outputDirectory = outputPath == null? Path.Combine(Application.dataPath, @"Scenes/NewHacks2024/Demo/Custom Events/") : outputPath;
    }

    public void Generate() {
        try {
            var input = File.ReadAllText(yamlFilePath);
            var deserializer = new DeserializerBuilder()
                .WithNamingConvention(CamelCaseNamingConvention.Instance)
                .Build();

            var config = deserializer.Deserialize<EventConfigContainer>(input);

            foreach (var eventConfig in config.EventConfig) {
                GenerateClassFile(eventConfig);
                Console.WriteLine($"Generated class: {eventConfig.Name}");
            }
        } catch (Exception ex) {
            Console.WriteLine("Error: " + ex.Message);
        }
    }

    private void GenerateClassFile(CustomEventConfig eventConfig) {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine("using System;");
        sb.AppendLine("using System.Collections.Generic;");
        sb.AppendLine("using UnityEngine;");

        sb.AppendLine();

        string baseClass = String.Equals(eventConfig.Type, "Breakpoint") ? "BreakpointBase" : "GameEventBase";
        sb.AppendLine($"public class {eventConfig.Name} : {baseClass}");
        sb.AppendLine("{");

        sb.AppendLine($"    public override string EventType => \"{eventConfig.Name}\";");
        sb.AppendLine($"    public override string Description => \"{eventConfig.Description}\";");

        // Generate properties
        foreach (var prop in eventConfig.Properties) {
            sb.AppendLine($"    public {prop.Type} {prop.Name} {{ get; private set; }}");
        }

        // Generate constructor
        sb.AppendLine();
        sb.AppendLine($"    public {eventConfig.Name}(GameObject source");
        foreach (var prop in eventConfig.Properties) {
            sb.AppendLine($"        , {prop.Type} {prop.Name.ToLower()}");
        }
        sb.AppendLine("    ) : base(source)");
        sb.AppendLine("    {");
        foreach (var prop in eventConfig.Properties) {
            sb.AppendLine($"        this.{prop.Name} = {prop.Name.ToLower()};");
        }
        sb.AppendLine("    }");

        // Generate GetEventData method
        sb.AppendLine();
        sb.AppendLine("    public override Dictionary<string, object> GetEventData()");
        sb.AppendLine("    {");
        sb.AppendLine("        return new Dictionary<string, object>");
        sb.AppendLine("        {");
        foreach (var prop in eventConfig.Properties) {
            sb.AppendLine($"            {{ \"{prop.Name}\", {prop.Name} }},");
        }
        sb.AppendLine("        };");
        sb.AppendLine("    }");

        // Add the condition check for breakpoints
        if (String.Equals(eventConfig.Type, "Breakpoint") && !string.IsNullOrEmpty(eventConfig.Condition)) {
            sb.AppendLine();
            sb.AppendLine("    public override void ExecuteEvent()");
            sb.AppendLine("    {");
            sb.AppendLine($"        if ({eventConfig.Condition})");
            sb.AppendLine("        {");
            sb.AppendLine("            Debugger.Instance.Pause();");
            sb.AppendLine("        }");
            sb.AppendLine("    }");
        }

        sb.AppendLine("}");

        // Save the generated code to a C# file
        string directoryPath = outputDirectory;
        if (!Directory.Exists(directoryPath)) {
            Directory.CreateDirectory(directoryPath);
        }

        string filePath = Path.Combine(directoryPath, $"{eventConfig.Name}.cs");
        File.WriteAllText(filePath, sb.ToString());

        Debug.Log($"Generated event class: {filePath}");
    }
}


public class GenerateEventClassesEditor : Editor {
    [MenuItem("Tools/Generate Custom Event Classes")]
    public static void GenerateClassesFromYaml() {
        try {
            // Run the CustomMessageGenerator to generate the event classes
            CustomMessageGenerator generator = new CustomMessageGenerator(null, null);
            generator.Generate();

            Debug.Log("Event classes generated successfully");
            AssetDatabase.Refresh();  // Refresh to load generated files in Unity
        } catch (System.Exception e) {
            Debug.LogError("Error generating event classes: " + e.Message);
        }
    }
}