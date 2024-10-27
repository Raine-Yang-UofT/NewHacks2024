using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControl : MonoBehaviour {
    public float moveSpeed = 5f;
    public GameObject bulletPrefab;

    void Shoot() {
        // Instantiate the bullet
        GameObject bullet = Instantiate(bulletPrefab, transform.position + transform.forward, Quaternion.identity);
        bullet.transform.forward = transform.forward; // Set the bullet's direction
        GameEventManager.Instance.AddGameEvent(new FireBulletBreakpoint(this, bullet));
    }

    void Update() {
        // Move the player using keyboard input
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");
        Vector3 movement = new Vector3(horizontal, 0f, vertical) * moveSpeed * Time.deltaTime;
        transform.Translate(movement);
        if (Input.GetKeyDown(KeyCode.Space)) Shoot();
    }
}