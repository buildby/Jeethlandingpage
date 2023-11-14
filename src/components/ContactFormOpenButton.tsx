"use client";

import { useDispatch } from "react-redux";
import { Button } from "./Button";
import { openContactForm, openTryDemoForm } from "../store/slices/modal.slice";

export const ContactFormOpenButton = ({ text = "Try Demo", isTryDemo = true, className = "" }) => {

  const dispatch = useDispatch();

  const openModal = () => {
    if (isTryDemo){
      dispatch(openTryDemoForm());
    } else {
      dispatch(openContactForm());
    }
  }

  return (
    <Button text={text} className={className} onClick={openModal} />
  )
}