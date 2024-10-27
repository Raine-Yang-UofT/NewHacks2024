using System.Collections.Generic;

[System.Serializable]
public class EventProperty {
    public string Name { get; set; }
    public string Type { get; set; }
    public object Value { get; set; }
}

[System.Serializable]
public class CustomEventConfig {
    public string Name { get; set; }
    public string Type { get; set; }
    public string Description { get; set; }
    public string Source { get; set; }
    public List<EventProperty> Properties { get; set; }
    public string Condition { get; set; }
}

public class EventConfigContainer {
    public List<CustomEventConfig> EventConfig { get; set; }
}
