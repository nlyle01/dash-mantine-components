import React from "react";
import {
    showNotification,
    updateNotification,
    hideNotification,
} from "@mantine/notifications";
import { MantineColors } from "../../props";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Notification line or icon color */
    color?: MantineColors;
    /** Radius from theme.radius, or number to set border-radius in px */
    radius?: MantineSize;
    /** Notification icon, replaces color line */
    icon?: React.ReactNode;
    /** Notification title, displayed before body */
    title?: React.ReactNode;
    /** Notification body, place main text here */
    message: React.ReactNode;
    /** Replaces colored line or icon with Loader component */
    loading?: boolean;
    /** Removes close button */
    disallowClose?: boolean;
    /** The ID of this component, used to identify dash components in callbacks */
    id: string;
    /** Auto close timeout, false to disable auto close */
    autoClose?: boolean | number;
    /** Action */
    action: "show" | "update" | "hide";
};

/**
 * Show dynamic notifications and alerts to user, part of notifications system. For more information, see: https://mantine.dev/others/notifications/
 */
const Notification = (props: Props) => {
    const { action, ...others } = props;

    switch (action) {
        case "show":
            showNotification(others);
            break;

        case "update":
            updateNotification(others);
            break;

        case "hide":
            hideNotification(others.id);
            break;

        default:
            break;
    }
};

Notification.defaultProps = {};

export default Notification;
