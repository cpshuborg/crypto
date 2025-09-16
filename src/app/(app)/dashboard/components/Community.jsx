"use client";
import React from "react";
import styles from "../styles/Community.module.css";

const avatars = [
    "/avatar1.svg",
    "/avatar2.svg",
    "/avatar3.svg",
    "/avatar4.svg",
    "/avatar5.svg",
    "/avatar6.svg",
    "/avatar7.svg",
];

export default function CommunityBox() {
    return (
        <div className={styles.container}>
            <div className={styles.avatarStack}>
                {avatars.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Avatar ${i + 1}`}
                        className={`${styles.avatar} ${styles[`avatar${i + 1}`]}`}
                    />
                ))}
            </div>
            <h3 className={styles.heading}>Join Our Community</h3>
            <p className={styles.paragraph}>
                Connect with other me and stay updated<br />
                Share your knowledge.
            </p>
            <button
                className={styles.joinButton}
                onClick={() => alert('Joined community')}
            >
                Join Now
            </button>
        </div>
    );
}
