import React from "react"
import Layout from "../components/Layout"
import felnott from "../assets/Nyilatkozat Felnőtt új.pdf"
import gyerek from "../assets/Nyilatkozat Gyermek új.pdf"
import adatvedelem from "../assets/Adatkezelési és hozzájárulási nyilatkozat.pdf"
import Checkbox from '@material-ui/core/Checkbox';
import * as styles from "../css/form.module.css"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Form = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <Layout>
            <section className={styles.contactPage}>
                <article className={styles.contactForm}>
                    <h1>Jelentkezés Lovaglásra</h1>
                    <p> Ha szívesen jönnél hozzánk lovagolni kérlek töltsd ki ezt a formot, és mi felvesszük veled  a kapcsolatot.
                        Lovaglás csak előre egyeztetett időpontban lehetséges.
                    </p>
                    <form action="https://formspree.io/f/mdoygngk" method="POST">
                        <div className={styles.formGroup}>
                            <input
                                type="name"
                                name="name"
                                placeholder="Név"
                                required={true}
                                className={styles.formControl}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                required={true}
                                className={styles.formControl}
                            />
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="telefonszám (+36701234567)"
                                required={true}
                                maxLength={12}
                                className={styles.formControl}
                            />
                            <textarea
                                name="Megjegyzés"
                                rows="5"
                                placeholder="Megjegyzés"
                                className={styles.formControl}
                            ></textarea>
                            <div className={styles.links}>
                                <p>Kérlek töltsd ki az alábbi nyilatkozatokat és hozdd magaddal az első lovaglásra vagy küldd el e-mailben az alábbi emailcímre: tucsoklovasudvar@gmail.com
                                    Nyilatkozat hiányában a lovaglás nem lehetséges!
                                </p>
                                <a href={felnott} download >
                                    Felnőtt nyilatkozat
                                </a>
                                <br/>
                                <a href={gyerek} download >
                                    Gyerek  nyilatkozat
                                </a>
                                <br/>
                                <a href={adatvedelem} download >
                                    Adatvédelmi nyilatkozat
                                </a>
                            </div>
                            <div>
                                <Button
                                    variant="outlined"
                                    onClick={handleClickOpen}
                                    style={{
                                        border:"none"
                                    }}
                                >
                                    Az adatvédelmi nyilatkozatot elfogadom
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Adatvédelmi nyilatkozat"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Hozzájárulok, hogy Benedek Rita (Tücsök Lovasudvar, ev.ig.sz.: 44681302), lovasoktatás, edzés,
                                            lovastábor, lovakkal való foglalkozás során a szülői nyilatkozat kitöltésével a személyes adataimat
                                            felvegye, tárolja.
                                            Tudomásul veszem, hogy minden rólam felvett adat a GDPR előírásainak megfelelően kerül kezelésre
                                            és tárolásra.

                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} required={true}>
                                            ok
                                        </Button>

                                    </DialogActions>
                                </Dialog>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    required={true}
                                />

                            </div>
                            <button type="submit" className={`${styles.submitBtn} ${styles.btn}`}>
                                Küldés
                            </button>
                        </div>
                    </form>
                </article>
            </section>
        </Layout>
    )
}
export default Form
