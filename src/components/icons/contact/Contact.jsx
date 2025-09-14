/* eslint-disable react/prop-types */
import { cn } from "../../../lib/utils";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const MailsIcon = forwardRef(
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

		const svgVariants = {
			normal: { y: 0, scale: 1 },
			animate: {
				y: [0, -1, 1, 0],
				scale: [1, 1.02, 1],
				transition: {
					duration: 0.6,
					ease: "easeOut",
					repeat: 0,
				},
			},
		};

		const flapVariants = {
			normal: { rotate: 0, opacity: 1 },
			animate: {
				rotate: [-2, 2, 0],
				opacity: [1, 0.9, 1],
				transition: {
					duration: 0.4,
					ease: "easeOut",
					repeat: 0,
				},
			},
		};

		const outlineVariants = {
			normal: { opacity: 1 },
			animate: {
				opacity: [0.8, 1, 0.9, 1],
				transition: {
					duration: 0.5,
					ease: "easeOut",
					repeat: 0,
				},
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
					animate={controls}
					initial="normal"
					variants={svgVariants}
				>
					<motion.path
						d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732"
						variants={outlineVariants}
					/>
					<motion.path
						d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5"
						variants={flapVariants}
					/>
					<motion.rect
						x="7"
						y="3"
						width="15"
						height="12"
						rx="2"
						variants={outlineVariants}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

MailsIcon.displayName = "MailsIcon";
export { MailsIcon };