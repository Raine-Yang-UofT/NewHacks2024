using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class GameEventSerializable {
    public float TimeStamp;
    public string SourceName;
    public string EventType;
    public string Description;
    public Dictionary<string, string> EventData;

    public GameEventSerializable(GameEventBase gameEvent) {
        TimeStamp = gameEvent.TimeStamp;
        SourceName = gameEvent.Source != null ? gameEvent.Source.name : "Unknown";
        EventType = gameEvent.EventType;
        Description = gameEvent.Description;

        // convert the dictionary to a list of key-value pairs for compatibility with JsonUtility
        EventData = new Dictionary<string, string>();
        foreach (var data in gameEvent.GetEventData()) {
            EventData[data.Key] = data.Value?.ToString() ?? "null";
        }
    }
}