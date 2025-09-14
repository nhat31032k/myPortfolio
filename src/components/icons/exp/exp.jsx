/* eslint-disable react/prop-types */
import { cn } from "../../../lib/utils";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const SwordsIcon = forwardRef(
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
				transition: { duration: 0.6, ease: "easeOut", repeat: 0 },
			},
		};

		const pathVariants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: {
				pathLength: [0, 1],
				opacity: [0.8, 1],
				transition: { duration: 0.5, ease: "easeOut", repeat: 0 },
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
					<motion.polyline
						points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"
						variants={pathVariants}
					/>
					<motion.line
						x1="13"
						x2="19"
						y1="19"
						y2="13"
						variants={pathVariants}
					/>
					<motion.line
						x1="16"
						x2="20"
						y1="16"
						y2="20"
						variants={pathVariants}
					/>
					<motion.line
						x1="19"
						x2="21"
						y1="21"
						y2="19"
						variants={pathVariants}
					/>
					<motion.polyline
						points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"
						variants={pathVariants}
					/>
					<motion.line x1="5" x2="9" y1="14" y2="18" variants={pathVariants} />
					<motion.line x1="7" x2="4" y1="17" y2="20" variants={pathVariants} />
					<motion.line x1="3" x2="5" y1="19" y2="21" variants={pathVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

SwordsIcon.displayName = "SwordsIcon";
export { SwordsIcon };