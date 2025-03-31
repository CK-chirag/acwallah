import React from "react";
import Button from "../common components/button";

export default function SellCard() {
    return (
        <div className="sell-card">
            <div className="sell-card__content">
                <h2 className="sell-card__title">Looking to sell your Old AC!?</h2>
                <p className="sell-card__desc">
                    Get the best price with zero hassle! List your AC in just a few clicks and connect with genuine buyers instantly. Fast, easy, and secure.
                </p>
            </div>
            <Button text="Sell Now" className="sell-card__button" onClick={() => alert("Sell Now button clicked!")} />
        </div>
    );
}