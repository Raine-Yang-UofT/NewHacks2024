using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class DebuggerUI : MonoBehaviour {

    // UI components
    public Button pauseButton;
    public Button resumeButton;
    public Button playByFrameButton;
    public Button playByIntervalButton;
    public Slider intervalSlider;
    public TMP_Text intervalValue;
    public Button setIntervalButton;
    public TMP_InputField scaleInputField;
    public Button setScaleButton;

    private void Start() {
        pauseButton.onClick.AddListener(Debugger.Instance.Pause);
        resumeButton.onClick.AddListener(Debugger.Instance.Resume);
        playByFrameButton.onClick.AddListener(Debugger.Instance.PlayByFrame);
        playByIntervalButton.onClick.AddListener(Debugger.Instance.PlayByInterval);
        setIntervalButton.onClick.AddListener(SetInterval);
        setScaleButton.onClick.AddListener(SetScale);
    }

    private void SetInterval() {
        Debugger.Instance.SetInterval(intervalSlider.value);
        intervalValue.text = intervalSlider.value.ToString("F1");
    }

    private void SetScale() {
        if (float.TryParse(scaleInputField.text, out float scaleValue)) {
            Debugger.Instance.SetScale(scaleValue);
        } else {
            Debug.LogWarning("Invalid scale value entered.");
        }
    }
}
