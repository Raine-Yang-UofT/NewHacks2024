using System;
using System.Collections.Generic;
using UnityEngine;

public class BulletHitEvent : GameEventBase
{
    public override string EventType => "BulletHitEvent";
    public override string Description => "Bullet hits an enemy";
    public Bullet bullet { get; private set; }
    public Enemy targetEnemy { get; private set; }

    public BulletHitEvent(GameObject source
        , Bullet bullet
        , Enemy targetenemy
    ) : base(source)
    {
        this.bullet = bullet;
        this.targetEnemy = targetenemy;
    }

    public override Dictionary<string, object> GetEventData()
    {
        return new Dictionary<string, object>
        {
            { "bullet", bullet },
            { "targetEnemy", targetEnemy },
        };
    }
}
