using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletHitBreakpoint : BreakpointBase {
    
    public override string EventType => "BulletHit";
    public override string Description => $"Bullet hit enemy";

    private Enemy targetEnemy;
    private Bullet bullet;


    public BulletHitBreakpoint(Enemy targetEnemy, Bullet bullet) : base(bullet.gameObject) {
        this.targetEnemy = targetEnemy;
        this.bullet = bullet;
    }

    public override Dictionary<string, object> GetEventData() {
        return new Dictionary<string, object>
        {
            { "targetEnemy", targetEnemy.name },
            { "bullet", bullet.name },
            { "damage", 1 },
            { "enemyHealthRemaining", targetEnemy.currentHealth }
        };
    }
}