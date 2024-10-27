using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bullet : MonoBehaviour {
    public float speed = 10f;
    public float lifetime = 2f; // Bullet lifetime

    private void Start() {
        // Destroy the bullet after its lifetime
        Destroy(gameObject, lifetime);
    }

    private void Update() {
        // Move the bullet forward
        transform.Translate(Vector3.forward * speed * Time.deltaTime);
    }

    private void OnCollisionEnter(Collision collision) {
        // Check if it hits an enemy
        //GameEventManager.Instance.AddGameEvent(new BulletHitBreakpoint(collision.collider.GetComponent<Enemy>(), this));
        if (collision.collider.CompareTag("Enemy")) {
            Enemy enemy = collision.collider.GetComponent<Enemy>();
            if (enemy != null) {
                enemy.TakeDamage(1); // Damage amount
            }
            Destroy(gameObject); // Destroy the bullet
        }
    }
}