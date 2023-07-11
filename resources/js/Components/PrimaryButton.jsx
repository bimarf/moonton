import React from "react";
import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "danger",
        "warning",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function PrimaryButton({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
