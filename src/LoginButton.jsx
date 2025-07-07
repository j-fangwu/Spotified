import { motion } from 'framer-motion'
import './App.css'

function LoginButton() {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => {}} className="connect-button">
          Connect to Spotify
        </motion.button>
    )
}

export { LoginButton }