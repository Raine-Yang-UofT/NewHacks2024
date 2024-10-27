using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour {
    public int maxHealth = 3;
    public int currentHealth;

    private void Start() {
        currentHealth = maxHealth;
    }

    public void TakeDamage(int damage) {
        currentHealth -= damage;
        GameEventManager.Instance.AddGameEvent(new HealthChangeEvent(this.gameObject, currentHealth, damage));
        if (currentHealth <= 0) {
            Destroy(gameObject); // Destroy enemy when health drops to zero
        }
    }
}