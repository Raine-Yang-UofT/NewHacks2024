using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FireBulletBreakpoint : BreakpointBase
{
    public PlayerControl Player { get; private set; }
    public GameObject Bullet { get; private set; }

    public override string EventType => "FireBullet";
    public override string Description => $"Player fired a bullet.";

    public FireBulletBreakpoint(PlayerControl player, GameObject bullet) : base(player.gameObject) {
        Player = player;
        Bullet = bullet;
    }

    public override Dictionary<string, object> GetEventData() {
        return new Dictionary<string, object>
        {
            { "playerName", Player.name },
            { "bulletPrefab", Bullet.name },
            { "bulletPosition", Bullet.transform.position }
        };
    }
}
