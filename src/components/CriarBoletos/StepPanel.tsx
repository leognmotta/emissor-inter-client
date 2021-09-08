import React, { useState } from "react"
import { Button, Steps, PageHeader } from "antd"
import { stepProps } from "./Form"

const StepPanel = ({ steps }: stepProps) => {
	const [activeStep, setActiveStep] = useState(0)

	function next() {
		setActiveStep(nextStep => nextStep + 1)
	}

	function prev() {
		setActiveStep(prevStep => prevStep - 1)
	}

	return (
		<PageHeader title={steps[activeStep].title}>
			<Steps current={activeStep}>
				{steps.map(item => (
					<Steps.Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className="steps-content">{steps[activeStep].content}</div>
			<div className="steps-action">
				{activeStep < steps.length - 1 && (
					<Button type="primary" onClick={next}>
						Next
					</Button>
				)}
				{activeStep === steps.length - 1 && (
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				)}
				{activeStep > 0 && (
					<Button style={{ margin: "0 8px" }} onClick={prev}>
						Previous
					</Button>
				)}
			</div>
		</PageHeader>
	)
}

export { StepPanel }
