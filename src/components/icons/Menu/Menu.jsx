/* eslint-disable react/prop-types */
import { cn } from "../../../lib/utils";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const MenuIcon = forwardRef(
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
				if (!isControlled.current) {
					controls.start("animate");
				} else {
					onMouseEnter?.(e);
				}
			},
			[controls, onMouseEnter, reduced],
		);

		const handleLeave = useCallback(
			(e) => {
				if (!isControlled.current) {
					controls.start("normal");
				} else {
					onMouseLeave?.(e);
				}
			},
			[controls, onMouseLeave],
		);

		const lineVariants = {
			normal: { x: 0, opacity: 1 },
			animate: (i) => ({
				x: [0, i % 2 === 0 ? 2 : -2, 0],
				opacity: [1, 0.8, 1],
				transition: { duration: 0.3, delay: i * 0.05 },
			}),
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
				>
					<motion.path d="M4 12h16" variants={lineVariants} custom={0} />
					<motion.path d="M4 18h16" variants={lineVariants} custom={1} />
					<motion.path d="M4 6h16" variants={lineVariants} custom={2} />
				</motion.svg>
			</motion.div>
		);
	},
);

MenuIcon.displayName = "MenuIcon";
export { MenuIcon };