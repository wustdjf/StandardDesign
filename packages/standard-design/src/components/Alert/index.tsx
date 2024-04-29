import React, { forwardRef, useContext, useMemo, useState } from 'react'
import {
	InfoCircleFilled,
	CheckCircleFilled,
	CloseCircleFilled,
	CloseOutlined
} from '@ant-design/icons'
import { CSSTransition } from 'react-transition-group'
import { AlertStyle } from './style'
import { AlertProps } from './interface'
import { GlobalConfigProps } from '../../GlobalConfig/interface'
import { globalCtx } from '../../GlobalConfig'
import cs from '../../utils/classNames'

const Alert = (props: AlertProps, ref: React.RefObject<HTMLDivElement>) => {
	const {
		style,
		className,
		type = 'info',
		title,
		content,
		showClear = false,
		showIcon = true,
		closeElement,
		onClose
	} = props

	const [visible, setVisible] = useState<boolean>(true)

	const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps
	const classNames = cs(
		prefixCls,
		className,
		`prefect-${darkTheme ? 'dark-' : ''}alert-${type}`,
		darkTheme ? 'prefect-dark-alert' : 'prefect-alert'
	)

	const leftIcon = useMemo(() => {
		switch (type) {
			case 'info':
				return <InfoCircleFilled className="alert-icon-info" />
			case 'success':
				return <CheckCircleFilled className="alert-icon-success" />
			case 'warning':
				return <InfoCircleFilled className="alert-icon-warning" />
			case 'error':
				return <CloseCircleFilled className="alert-icon-error" />
			default:
				return <InfoCircleFilled className="alert-icon-info" />
		}
	}, [type])

	const close = () => {
		setVisible(false)
		onClose && onClose()
	}

	return (
		<AlertStyle>
			<CSSTransition
				in={visible}
				timeout={200}
				appear
				mountOnEnter
				classNames="fadeContent"
				unmountOnExit
				onEnter={(e: HTMLDivElement) => {
					e.style.display = 'flex'
				}}
				onExited={(e: HTMLDivElement) => {
					e.style.display = 'none'
				}}
			>
				<div className={classNames} style={style} ref={ref}>
					<div className="alert-content">
						{showIcon && <div className="alert-icon">{leftIcon}</div>}
						<div className="alert-text">
							{title && <div className="title">{title}</div>}
							{content}
						</div>
					</div>
					{showClear && (
						<div className="close-icon" onClick={close}>
							{closeElement || <CloseOutlined />}
						</div>
					)}
				</div>
			</CSSTransition>
		</AlertStyle>
	)
}

export default forwardRef<unknown, AlertProps>(Alert)
