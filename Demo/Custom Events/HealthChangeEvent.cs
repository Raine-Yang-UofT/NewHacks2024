using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HealthChangeEvent : GameEventBase {
    private float health;
    private float change;

    public override string EventType => "HealthChange";
    public override string Description => "Called when the player's health changes";

    public HealthChangeEvent(GameObject source, float health, float change)
        : base(source) {
        this.health = health;
        this.change = change;
    }

    public override Dictionary<string, object> GetEventData() {
        return new Dictionary<string, object>
        {
            { "health", health },
            { "change", change }
        };
    }
}