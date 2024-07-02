import classNames  from 'classnames'

import styles from './style.module.scss'

interface TabsProps {
	data: string[];
    active: number;
	setActive: React.Dispatch<React.SetStateAction<number>>
}

export const Tabs: React.FC<TabsProps> = ({ data, setActive, active }) => {

	return (
		<>
			<div className={styles.tabs}>
				{data.map((e, index) => (
					<button
						key={index}
						onClick={() => {
							setActive(index);
						}}
						className={classNames(
                            styles.tab,
                            active === index ? styles.__active : ''
                        )}
					>
						{e}
					</button>
				))}
			</div>
		</>
	);
};