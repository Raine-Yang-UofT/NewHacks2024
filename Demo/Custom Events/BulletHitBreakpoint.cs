using System;
using System.Collections.Generic;
using UnityEngine;

public class BulletHitBreakpoint : BreakpointBase
{
    public override string EventType => "BulletHitBreakpoint";
    public override string Description => "Bullet hit enemy";
    public Enemy targetEnemy { get; private set; }
    public Bullet bullet { get; private set; }

    public BulletHitBreakpoint(GameObject source
        , Enemy targetenemy
        , Bullet bullet
    ) : base(source)
    {
        this.targetEnemy = targetenemy;
        this.bullet = bullet;
    }

    public override Dictionary<string, object> GetEventData()
    {
        return new Dictionary<string, object>
        {
            { "targetEnemy", targetEnemy },
            { "bullet", bullet },
        };
    }

    public override void ExecuteEvent()
    {
        if (targetEnemy.currentHealth < 10)
        {
            Debugger.Instance.Pause();
        }
    }
}
