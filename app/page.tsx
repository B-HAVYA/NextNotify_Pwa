"use client";
import Image from "next/image";
import { Toaster, toast } from "sonner";

export default function Home() {
  const handleClick = () => {
    toast.success("Notification");
  };

  return (
    <div className="box">
      <Toaster expand={true} richColors position="top-center" />

      <img style={{ width: "375px", height: "44px" }} src="Status Bar.png" />

      <div style={{ width: "327px", height: "71px" }}>
        <div className="txto">Lorem Ipsum ...</div>
        <div className="secondary-text-styles">
          Lorem ipsum dolor sit amet.
        </div>
      </div>

      <img
        style={{ width: "344px", height: "344px" }}
        className="img-bg"
        src="Illustration.png"
      />
      <img
        className="img-overlay"
        src="ri_notification-2-line.png"
        style={{ position: 'relative', top: -205 }}
      />
      <div className="btn-grad" onClick={handleClick}>
        Send Notification
      </div>
    </div>
  );
}
