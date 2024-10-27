using System;
using System.Collections.Generic;
using UnityEngine;

public class FireBulletBreakpoint : BreakpointBase
{
    public override string EventType => "FireBulletBreakpoint";
    public override string Description => "Player fired a bullet";
    public PlayerControl player { get; private set; }
    public Bullet bullet { get; private set; }

    public FireBulletBreakpoint(GameObject source
        , PlayerControl player
        , Bullet bullet
    ) : base(source)
    {
        this.player = player;
        this.bullet = bullet;
    }

    public override Dictionary<string, object> GetEventData()
    {
        return new Dictionary<string, object>
        {
            { "player", player },
            { "bullet", bullet },
        };
    }
}
