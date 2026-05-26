"use client";
import { useState, useEffect } from "react";
import { Alert } from "../types";

export const useAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("alerts");
    if (stored) setAlerts(JSON.parse(stored));
  }, []);

  const addAlert = (newAlert: Omit<Alert, "id" | "triggered">) => {
    const alert: Alert = {
      ...newAlert,
      id: crypto.randomUUID(),
      triggered: false,
    };
    const updated = [...alerts, alert];
    setAlerts(updated);
    localStorage.setItem("alerts", JSON.stringify(updated));
  };

  const deleteAlert = (id: string) => {
    const updated = alerts.filter((alert) => alert.id !== id);
    setAlerts(updated);
    localStorage.setItem("alerts", JSON.stringify(updated));
  };

  return { alerts, addAlert, deleteAlert };
};
