"use client";
import React, { useState, useEffect, useRef } from "react";
import GlareBackground from "@/app/components/base/GlareBackground";
import Navigation from "@/app/components/base/Navigation";
import styles from "./TokenCalculator.module.scss";
import Footer from "../components/Footer";
//import { ArrowLeftToLine } from "lucide-react";
import { FaArrowLeft } from 'react-icons/fa'; 
import ErrorMessage from "@/app/components/ErrorMessage"; // Import the ErrorMessage component

const TokenCalculator = () => {
  const [models, setModels] = useState<any[]>([]);
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [inputTokens, setInputTokens] = useState<number | string>(0);
  const [outputTokens, setOutputTokens] = useState<number | string>(0);
  const [totalCost, setTotalCost] = useState("0");
  const [whatYouCanBuild, setWhatYouCanBuild] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const [inputTokenError, setInputTokenError] = useState<string | null>(null);
  const [outputTokenError, setOutputTokenError] = useState<string | null>(null);

  const [showCostInput, setShowCostInput] = useState(false);
  const [showCostResult, setShowCostResult] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showModelDetails, setShowModelDetails] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);
  const costInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadModelData = async () => {
      const response = await fetch("/data/model_prices_and_context_window.json");
      const jsonData = await response.json();
      const modelArray = Object.entries(jsonData).map(([key, value]: any) => ({
        name: key,
        ...value,
      }));
      setModels(modelArray);
    };
    loadModelData();
  }, []);

  const saveDataToDatabase = async () => {
    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          whatYouCanBuild,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      const data = await response.json();
      console.log("Data saved:", data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const calculateCost = () => {
    if (selectedModel) {
      const inputTokensNum = Number(inputTokens);
      const outputTokensNum = Number(outputTokens);
      let hasError = false;

      // Reset previous errors
      setInputTokenError(null);
      setOutputTokenError(null);

      // Check if input tokens exceed the model's maximum allowed tokens
      if (inputTokensNum > selectedModel.max_input_tokens) {
        setInputTokenError(
          `Input tokens exceed the maximum allowed (${selectedModel.max_input_tokens}).`
        );
        hasError = true;
      }

      // Check if output tokens exceed the model's maximum allowed tokens
      if (outputTokensNum > selectedModel.max_output_tokens) {
        setOutputTokenError(
          `Output tokens exceed the maximum allowed (${selectedModel.max_output_tokens}).`
        );
        hasError = true;
      }

      if (hasError) {
        return;
      }

      const total =
        inputTokensNum * selectedModel.input_cost_per_token +
        outputTokensNum * selectedModel.output_cost_per_token;
      setTotalCost(total.toFixed(6));
      setShowEmailPopup(true);
    }
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = models.find((model) => model.name === e.target.value);
    setSelectedModel(selected);
    setShowModelDetails(true);

    // Scroll to model details when they open
    setTimeout(() => {
      if (costInputRef.current) {
        const resultTop = costInputRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY + resultTop - 300; // Adjust scroll offset as needed
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    }, 100);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const submitEmail = () => {
    if (!validateEmail(email)) {
      setEmailError("Put a valid email id");
      return;
    }

    saveDataToDatabase();
    setShowEmailPopup(false);
    setShowCostResult(true);

    setTimeout(() => {
      if (resultRef.current) {
        const resultTop = resultRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY + resultTop - 200;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    }, 100);
  };

  const handleInputFocus = (
    setTokens: React.Dispatch<React.SetStateAction<number | string>>
  ) => {
    setTokens("");
  };

  const handleInputBlur = (
    tokens: number | string,
    setTokens: React.Dispatch<React.SetStateAction<number | string>>
  ) => {
    if (tokens === "") {
      setTokens(0);
    }
  };

  return (
    <>
      <GlareBackground />
      <Navigation />
      <div className={styles.tokenCalculatorContainer}>
        {showCostResult ? (
          <div className={styles.resultContainer} ref={resultRef}>
            <button
              className={styles.closeButton}
              onClick={() => setShowCostResult(false)}
            >
              <FaArrowLeft />
            </button>
            <h2>Total Cost</h2>
            <p>${totalCost}</p>
            <a
              href="https://calendly.com/vivek-_ou/30min?month=2024-04"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className={styles.bookConsultationButton}>
                Book a Free Consultation with our AI Engineer
              </button>
            </a>
          </div>
        ) : (
          <div>
            <h1 className={styles.heading}>Token Calculator</h1>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>What are you building?</label>
              <input
                type="text"
                className={styles.inputField}
                value={whatYouCanBuild}
                onChange={(e) => setWhatYouCanBuild(e.target.value)}
                placeholder="Enter text"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Select Model:</label>
              <select
                className={`${styles.inputField} ${styles.dropdownField}`}
                value={selectedModel?.name || ""}
                onChange={handleModelChange}
              >
                {models.map((model) => (
                  <option key={model.name} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            {showModelDetails && selectedModel && (
              <div className={styles.modelDetails} ref={costInputRef}>
                <h3>Model Details</h3>
                <p className={styles.inputCost}>
                  Max Input Tokens: {selectedModel.max_input_tokens}
                </p>
                <p className={styles.inputCost}>
                  Cost Per Input Token: ${selectedModel.input_cost_per_token}
                </p>
                <p className={styles.outputCost}>
                  Max Output Tokens: {selectedModel.max_output_tokens}
                </p>
                <p className={styles.outputCost}>
                  Cost Per Output Token: ${selectedModel.output_cost_per_token}
                </p>
              </div>
            )}

            {!showCostInput ? (
              <div className={styles.buttonRow}>
                <button
                  onClick={() => setShowCostInput(true)}
                  className={styles.calculateButton}
                >
                  Calculate Cost
                </button>
              </div>
            ) : (
              <div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Input Tokens:</label>
                  <input
                    type="number"
                    value={inputTokens}
                    onChange={(e) => setInputTokens(Number(e.target.value))}
                    onFocus={() => handleInputFocus(setInputTokens)}
                    onBlur={() => handleInputBlur(inputTokens, setInputTokens)}
                    placeholder="0"
                    className={styles.inputField}
                  />
                  {inputTokenError && (
                    <ErrorMessage
                      message={inputTokenError}
                      onClose={() => setInputTokenError(null)}
                    />
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Output Tokens:</label>
                  <input
                    type="number"
                    value={outputTokens}
                    onChange={(e) => setOutputTokens(Number(e.target.value))}
                    onFocus={() => handleInputFocus(setOutputTokens)}
                    onBlur={() =>
                      handleInputBlur(outputTokens, setOutputTokens)
                    }
                    placeholder="0"
                    className={styles.inputField}
                  />
                  {outputTokenError && (
                    <ErrorMessage
                      message={outputTokenError}
                      onClose={() => setOutputTokenError(null)}
                    />
                  )}
                </div>

                <div className={styles.buttonRow}>
                  <button
                    onClick={calculateCost}
                    className={styles.calculateButton}
                  >
                    Calculate
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {showEmailPopup && (
          <>
            <div className={styles.overlay} /> {/* Dark background and blur */}
            <div className={styles.popupContainer}>
              <div className={styles.popup}>
                <div className={styles.popupContent}>
                  <h3>Enter your email to view the result</h3>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) {
                        setEmailError(null);
                      }
                    }}
                    placeholder="Enter your email"
                    className={styles.inputField}
                  />
                  {emailError && (
                    <ErrorMessage
                      message={emailError}
                      onClose={() => setEmailError(null)}
                    />
                  )}
                  <button
                    onClick={submitEmail}
                    className={styles.submitButton}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TokenCalculator;
