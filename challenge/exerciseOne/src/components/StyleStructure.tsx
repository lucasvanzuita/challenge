import { CgScreen } from "react-icons/cg";
import { MdPhoneIphone } from "react-icons/md";

import styles from "../styles/components/StyleStructure.module.css";

export function StyleStructure() {
  return (
    <header>
      <div className={styles.header}>
        <p>Design</p>
      </div>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Class</th>
              <th colSpan={2}>Size</th>
              <th colSpan={2}>Line</th>
              <th>Weight</th>
              <th>Letter spacing</th>
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            <tr>
              <td>
                <p><h1>Display</h1></p>
              </td>
              <td>
                <CgScreen /> 48px (3 rem)
              </td>
              <td>
                <MdPhoneIphone /> 40px (2.5 rem)
              </td>
              <td>
                <CgScreen /> 52px
              </td>
              <td>
                <MdPhoneIphone /> 44px
              </td>
              <td>Bold (700)</td>
              <td>-1.2</td>
            </tr>

            <tr>
              <td>
                <p><h2>Heading L</h2></p>
              </td>
              <td>
                <CgScreen /> 40px (2.5 rem)
              </td>
              <td>
                <MdPhoneIphone /> 32px (2 rem)
              </td>
              <td>
                <CgScreen /> 44px
              </td>
              <td>
                <MdPhoneIphone /> 36px
              </td>
              <td>Bold (700)</td>
              <td>-1</td>
            </tr>

            <tr>
              <td>
                <p><h3>Heading M</h3></p>
              </td>
              <td>
                <CgScreen /> 32px (2 rem)
              </td>
              <td>
                <MdPhoneIphone /> 24px (1.5 rem)
              </td>
              <td>
                <CgScreen /> 36px
              </td>
              <td>
                <MdPhoneIphone /> 28px
              </td>
              <td>Bold (700)</td>
              <td>-0.8</td>
            </tr>

            <tr>
              <td>
                <p><h4>Heading S</h4></p>
              </td>
              <td>
                <CgScreen /> 24px (1.5 rem)
              </td>
              <td>
                <MdPhoneIphone /> 20px (1.25 rem)
              </td>
              <td>
                <CgScreen /> 28px
              </td>
              <td>
                <MdPhoneIphone /> 24px
              </td>
              <td>Bold (700)</td>
              <td>-0.6</td>
            </tr>

            <tr>
              <td>
                <p><h5>Heading XS</h5></p>
              </td>
              <td>
                <CgScreen /> 20px (1.25 rem)
              </td>
              <td>
                <MdPhoneIphone /> 18px (1.125 rem)
              </td>
              <td>
                <CgScreen /> 24px
              </td>
              <td>
                <MdPhoneIphone /> 22px
              </td>
              <td>Bold (700)</td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <p><h6>Subheading</h6></p>
              </td>
              <td colSpan={2}>
                <CgScreen /> <MdPhoneIphone /> 16px (1 rem)
              </td>
              <td colSpan={2}>
                <CgScreen /> <MdPhoneIphone /> 20px
              </td>
              <td>Bold (700)</td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <p><span>Boby M</span></p>
              </td>
              <td colSpan={2}>
                <CgScreen /> <MdPhoneIphone /> 16px (1 rem)
              </td>
              <td colSpan={2}>
                <CgScreen /> <MdPhoneIphone /> 24px
              </td>
              <td>Regular (400), Bold (700)</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  );
}
