import { getSystemStyles } from "../lib/keystatic";
import HeaderClient from "./HeaderClient";

export default async function Header() {
    const styles = await getSystemStyles();
    return <HeaderClient styles={styles} />;
}
