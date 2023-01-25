"use strict"
import ow from "ow";
import nodemailer from "nodemailer";
import os from "os";

const {username} = os.userInfo();
const isEmail = ow.string.is((e) => /^.+@.+\..+$/.test(e));

function owWithMessage(val, message, validator) {
    try {
        ow(val, validator);
    } catch (error) {
        throw new Error(message);
    }
}

owWithMessage(
    process.env.EMAIL_PASSWORD,
    "EMAIL_PASSWORD environment variable is not set",
    ow.string.minLength(1)
);
owWithMessage(
    process.env.EMAIL_USERNAME,
    "EMAIL_USERNAME environment variable is not set to an email",
    isEmail
);

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
};

export async function handler(event) {

    // Logger
    const runId = Date.now().toString().slice(-5);
    // eslint-disable-next-line no-console
    const log = (...args) => console.log(runId, ...args);

    const {email, message} = JSON.parse(event.body);

    // Validating
    try {
        log("> Validating input", " email: ", email, " message:", message);
        owWithMessage(
            email,
            "The email is invalid. Please enter a valid email address.",
            isEmail
        );
    } catch (e) {
        log("> Validation failed", e.message);
        return {
            statusCode: 403,
            body: JSON.stringify({message: e.message}),
            headers,
        };
    }

    const sender = email;

    const mail = {
        from: sender,
        to: `"node mailer" <nodemailer.test.test81@gmail.com>`,
        subject: `Email from ${sender}`,
        text: message,
    };

    try {

        log("> Sending...");
        await transporter.verify();
        await transporter.sendMail(mail);
        log("> Send success!");

    } catch (error) {

        log("> Send failure!", error, error.message);

        return {
            statusCode: 500,
            body: JSON.stringify({message: error.message, error: "error"}),
            headers,
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({success: true}),
        headers,
    };
}

