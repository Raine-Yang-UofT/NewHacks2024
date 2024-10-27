using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class BreakpointBase : GameEventBase {

    public Func<Dictionary<string, object>, bool> ConditionExpression { get; private set; }
    public bool Condition {
        get {
            if (ConditionExpression != null) {
                return Debugger.Instance.enableBreakpoints || ConditionExpression(GetEventData());
            }
            return Debugger.Instance.enableBreakpoints;
        }
    }

    public BreakpointBase(GameObject source) : base(source) {
    }

    public BreakpointBase(GameObject source, Func<Dictionary<string, object>, bool> condition) : base(source) {
        ConditionExpression = condition;
    }

    public override void ExecuteEvent() {
        if (Condition) {
            Debugger.Instance.Pause();
        }
    }
}