using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class InFileReporter : IEventReporter {
    private List<GameEventBase> gameEvents = new List<GameEventBase>();
    private string filePath;

    public InFileReporter() {
        string fileName = "GameEventsLog.txt";

        // Combine directory path and file name
        filePath = Path.Combine(Application.dataPath, fileName);
        Debug.Log(filePath);
    }

    public void OnEventUpdate(GameEventBase gameEvent) {
        gameEvents.Add(gameEvent);
        using (StreamWriter writer = new StreamWriter(filePath, true)) {
            writer.WriteLine($"Event: {gameEvent.EventType}");
            writer.WriteLine($"Timestamp: {gameEvent.TimeStamp}");
            writer.WriteLine($"Description: {gameEvent.Description}");
            writer.WriteLine($"Source: {gameEvent.Source.name}");
            writer.WriteLine("Event Data:");
            foreach (var data in gameEvent.GetEventData()) {
                writer.WriteLine($"{data.Key}: {data.Value}");
            }
            writer.WriteLine();
        }
    }

    public void DisplayReportEnd() {
        using (StreamWriter writer = new StreamWriter(filePath, true)) {
            writer.WriteLine("=== End of Log ===");
        }

        Debug.Log($"Event report saved to {filePath}");
    }
}