/* eslint-disable react/prop-types */
import { cn } from "../../../lib/utils";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const BatteryFullIcon = forwardRef(
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
			normal: { rotate: 0, scale: 1 },
			animate: {
				rotate: [0, -2, 2, 0],
				scale: [1, 1.02, 1],
				transition: {
					duration: 0.6,
					ease: "easeOut",
					repeat: 0,
				},
			},
		};

		const barVariants = {
			normal: { opacity: 1, scaleY: 1 },
			animate: (i) => ({
				opacity: [0.6, 1, 0.8],
				scaleY: [0.8, 1, 0.9],
				transition: {
					duration: 0.4,
					ease: "easeOut",
					repeat: 0,
					delay: i * 0.1,
				},
			}),
		};

		const rectVariants = {
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
					<motion.path d="M10 10v4" variants={barVariants} custom={0} />
					<motion.path d="M14 10v4" variants={barVariants} custom={1} />
					<motion.path d="M6 10v4" variants={barVariants} custom={2} />
					<motion.rect
						x="2"
						y="6"
						width="16"
						height="12"
						rx="2"
						variants={rectVariants}
					/>
					<motion.path d="M22 14v-4" variants={rectVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

BatteryFullIcon.displayName = "BatteryFullIcon";
export { BatteryFullIcon };