/* eslint-disable react/prop-types */
import { cn } from "../../../lib/utils";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const HouseIcon = forwardRef(
    ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
        const controls = useAnimation();
        const reduced = useReducedMotion();
        const isControlled = useRef(false);

        useImperativeHandle(ref, () => {
            isControlled.current = true;
            return {
                startAnimation: () =>
                    reduced ? controls.start("normal") : controls.start("animate"),
                stopAnimation: () => controls.start("normal"),
            };
        });

        const handleEnter = useCallback(
            (e) => {
                if (reduced) return;
                if (!isControlled.current) controls.start("animate");
                else onMouseEnter?.(e);
            },
            [controls, reduced, onMouseEnter],
        );

        const handleLeave = useCallback(
            (e) => {
                if (!isControlled.current) controls.start("normal");
                else onMouseLeave?.(e);
            },
            [controls, onMouseLeave],
        );

        const houseOutlineVariants = {
            normal: { strokeDashoffset: 0, opacity: 1 },
            animate: {
                strokeDashoffset: [100, 0],
                opacity: [0.7, 1],
                transition: { duration: 0.4, ease: "easeOut" },
            },
        };

        const doorVariants = {
            normal: { scaleY: 1, opacity: 1 },
            animate: {
                scaleY: [0.8, 1.1, 1],
                opacity: [0.8, 1],
                transition: { duration: 0.3, delay: 0.2, ease: "easeOut" },
            },
        };

        const smokeVariants = {
            normal: { opacity: 0, y: 0, scale: 0.8 },
            animate: {
                opacity: [0, 0.5, 0],
                y: [-1, -3, -5],
                scale: [0.8, 1, 1.05],
                transition: { duration: 0.6, delay: 0.15, ease: "easeOut" },
            },
        };

        const wiggleVariants = {
            normal: { rotate: 0, scale: 1 },
            animate: {
                rotate: [0, -0.8, 0.8, 0],
                scale: [1, 1.01, 1],
                transition: { duration: 0.3, ease: "easeOut" },
            },
        };

        return (
            <motion.div
                className={cn("inline-flex items-center justify-center", className)}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                {...props}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-house-icon lucide-house"
                >
                    <motion.g
                        variants={wiggleVariants}
                        initial="normal"
                        animate={controls}
                    >
                        <motion.path
                            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                            strokeDasharray="100"
                            strokeDashoffset="100"
                            variants={houseOutlineVariants}
                            initial="normal"
                            animate={controls}
                        />
                        <motion.path
                            d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
                            variants={doorVariants}
                            initial="normal"
                            animate={controls}
                        />
                    </motion.g>

                    <motion.g
                        variants={smokeVariants}
                        initial="normal"
                        animate={controls}
                    >
                        <motion.circle cx="16.5" cy="6" r="0.8" />
                        <motion.circle cx="17.5" cy="4.5" r="0.6" />
                        <motion.circle cx="18.3" cy="3.2" r="0.45" />
                    </motion.g>
                </motion.svg>
            </motion.div>
        );
    },
);

HouseIcon.displayName = "HouseIcon";
export { HouseIcon };
