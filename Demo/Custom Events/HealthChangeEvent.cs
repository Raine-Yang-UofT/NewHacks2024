using System;
using System.Collections.Generic;
using UnityEngine;

public class HealthChangeEvent : GameEventBase
{
    public override string EventType => "HealthChangeEvent";
    public override string Description => "Health changed";
    public int previousHealth { get; private set; }
    public int currentHealth { get; private set; }

    public HealthChangeEvent(GameObject source
        , int previoushealth
        , int currenthealth
    ) : base(source)
    {
        this.previousHealth = previoushealth;
        this.currentHealth = currenthealth;
    }

    public override Dictionary<string, object> GetEventData()
    {
        return new Dictionary<string, object>
        {
            { "previousHealth", previousHealth },
            { "currentHealth", currentHealth },
        };
    }
}
