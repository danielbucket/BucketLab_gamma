import { useState, useEffect } from "react"
import PropTypes from "prop-types"

function TypeWriter({ text }) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 50);

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return <p>{currentText}</p>;
}

TypeWriter.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TypeWriter