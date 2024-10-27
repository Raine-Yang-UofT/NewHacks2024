using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.TextCore.Text;

public class GameEventManager : MonoBehaviour {

    private static GameEventManager _instance;

    public static GameEventManager Instance { get { return _instance; } }

    public List<IEventObserver> observers = new List<IEventObserver>();
    
    // record last event received
    public GameEventBase lastEvent;

    // singleton constructor
    private void Awake() {
        if (_instance != null && _instance != this) {
            Destroy(this.gameObject);
        } else {
            _instance = this;
        }
    }

    public void RegisterObserver(IEventObserver observer) {
        observers.Add(observer);
    }

    public void AddGameEvent(GameEventBase gameEvent) {
        gameEvent.ExecuteEvent();

        // filter out same event from same source within 1 second
        if (lastEvent != null && String.Equals(lastEvent.Source.name, gameEvent.Source.name)
            && lastEvent.TimeStamp == gameEvent.TimeStamp) {
            return;
        }

        foreach (IEventObserver observer in observers) {
            observer.OnEventUpdate(gameEvent);
        }
    }
}