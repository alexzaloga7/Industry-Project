import "./RecentActivity.scss";
import React, { useState, useEffect } from "react";

function RecentActivity() {
  const getCurrentTimestamp = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  };
  const [userInput, setUserInput] = useState("");
  const [chatbotConvo, setChatbotConvo] = useState(0);
  const [messages, setMessages] = useState([
    {
      sender: "chatbot",
      content:
        "Hi Matthew, I’m your American Express AI assistant. How can I assist you today?",
      timestamp: getCurrentTimestamp(),
    },
  ]);

  useEffect(() => {
    if (messages.length % 2 === 0 && messages.length > 0) {
      setTimeout(() => {
        let newMessage = {};
        switch (chatbotConvo) {
          case 0:
            newMessage = {
              sender: "chatbot",
              content:
                "Certainly! You have 512 reward points, Matthew. Would you like me to show you all available offers, or personalized recommended offers?",
              timestamp: getCurrentTimestamp(),
            };
            setChatbotConvo(1);
            break;
          case 1:
            newMessage = {
              sender: "chatbot",
              content:
                "Here are some personalized recommended offers for you...",
              timestamp: getCurrentTimestamp(),
            };
            setChatbotConvo(2);
            break;
          default:
            break;
        }
        setMessages([...messages, newMessage]);
      }, 2000);
    }
  }, [messages, chatbotConvo]);

  const handleUserInputSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      setMessages([
        ...messages,
        {
          sender: "user",
          content: userInput,
          timestamp: getCurrentTimestamp(),
        },
      ]);
      setUserInput("");
    }
  };

  return (
    <section className="ra">
      <div className="ra__left">
        <div className="ra__heading">
          <h2 className="ra__heading-text">
            <span className="ra__link">Recent Activity</span>
          </h2>
        </div>
        <div className="ra__transaction-types">
          <div className="ra__type ra__type--chosen">
            <p className="ra__type-text">Latest Transactions</p>
          </div>
          <div className="ra__type">
            <p className="ra__type-text">
              <span className="ra__link">Pending Transactions</span>
            </p>
          </div>
        </div>
        <div className="ra__transaction-status">
          <p className="ra__transaction-status-text">Latest Transactions</p>
          <p className="ra__learn-more ra__link">Learn More</p>
        </div>
        <ul className="ra__transactions">
          <li className="ra__transaction"></li>
          <li className="ra__transaction"></li>
          <li className="ra__transaction"></li>
          <li className="ra__transaction"></li>
        </ul>
      </div>
      <div className="ra__right">
        <div className="ra__top">
          <section className="add">
            <p className="add__text">
              Get rewards for doing the things you love
            </p>
          </section>
          <section className="chatbot">
            <div className="chatbot__header">
              <p className="chatbot__header-text">Personal AI Assistant</p>
              <span class="material-symbols-outlined chatbot__close">
                close
              </span>
            </div>
            <div className="chatbot__content">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.sender === "chatbot"
                      ? "chatbot__res"
                      : "chatbot__req"
                  }
                >
                  {message.sender === "chatbot" ? (
                    <img
                      className="chatbot__img"
                      src="https://www.shutterstock.com/image-vector/colorful-wolfs-head-on-black-600w-1690939516.jpg"
                      alt="chatbot"
                    />
                  ) : (
                    <img
                      className="chatbot__img"
                      src="https://www.shutterstock.com/image-vector/chihuahua-dog-abstract-neon-color-600w-1842098419.jpg"
                      alt="chatbot"
                    />
                  )}
                  <div className="chatbot__message">
                    <p className="chatbot__timestamp">{message.timestamp}</p>
                    <p className="chatbot__message-content">
                      {message.content}
                    </p>
                    <div
                      className={
                        message.sender === "chatbot"
                          ? "chatbot__res-shape"
                          : "chatbot__req-shape"
                      }
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <form className="chatbot__input" onSubmit={handleUserInputSubmit}>
              <span class="chatbot__icon material-symbols-outlined">
                attach_file
              </span>
              <input
                className="chatbot__message-input"
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <span class="chatbot__icon material-symbols-outlined">mood</span>
            </form>
          </section>
        </div>
        <div className="ra__bottom">
          <p className="ra__useful-links">Useful Links</p>
        </div>
      </div>
    </section>
  );
}

export default RecentActivity;
