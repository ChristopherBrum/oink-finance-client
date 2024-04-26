import styles from './MenuTab.module.css';

interface MenuTabProps {
	text: string; 
	handler: () => void; 
}

const MenuTab: React.FC<MenuTabProps> = ({ text, handler }) => {
	return (
		<div id={styles.wrapper} onClick={handler}>
			<p>{text}</p>
		</div>
	);
}

export default MenuTab;