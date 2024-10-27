using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Debugger : MonoBehaviour {

    private static Debugger _instance;

    public static Debugger Instance { get { return _instance; } }

    // singleton constructor
    private void Awake() {
        if (_instance != null && _instance != this) {
            Destroy(this.gameObject);
        } else {
            _instance = this;
        }
    }

    public IEventReporter reporter;
    public bool enableBreakpoints = true;

    private float stepInterval = 0.1f;
    private float playSpeed = 1.0f;
    private bool isPaused = false;

    public void Start() {
        reporter = new HTTPEventReporter();
        GameEventManager.Instance.RegisterObserver(reporter);
    }

    public void Pause() {
        isPaused = true;
        Time.timeScale = 0;
    }

    public void Resume() {
        isPaused = false;
        Time.timeScale = playSpeed;
    }

    public void PlayByFrame() {
        if (isPaused) {
            StartCoroutine(PlayOneFrame());
        }
    }

    private IEnumerator PlayOneFrame() {
        Time.timeScale = 1;
        yield return null;
        Time.timeScale = 0;
    }

    public void PlayByInterval() {
        if (isPaused) {
            StartCoroutine(PlayIntervalCoroutine());
        }
    }

    private IEnumerator PlayIntervalCoroutine() {
        Time.timeScale = 1;
        yield return new WaitForSecondsRealtime(stepInterval);
        Time.timeScale = 0;
    }

    public void SetInterval(float newInterval) {
        stepInterval = newInterval;
    }

    public void SetScale(float newScale) {
        playSpeed = newScale;
        Time.timeScale = playSpeed;
    }

    private void OnApplicationQuit() {
        reporter?.DisplayReportEnd();
    }
}