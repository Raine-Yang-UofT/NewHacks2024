using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class GameEventBase {

    public int TimeStamp { get; set; }
    public GameObject Source { get; set; }

    public abstract string EventType { get; }
    public abstract string Description { get; }

    public GameEventBase(GameObject source) {
        TimeStamp = (int)Time.realtimeSinceStartup;
        Source = source;
    }

    public abstract Dictionary<string, object> GetEventData();
    public virtual void ExecuteEvent() { }
}
