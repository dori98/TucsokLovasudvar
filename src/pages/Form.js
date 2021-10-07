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
import Seo from "../components/Seo";

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
    return (
        <Layout>
            <Seo
                lang={"hu"}
                title={"Jelentkezés lovaglásra"}
                description={"A Tücsök lovasudvar formja ahol jelentkezni lehet lovaglásra."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, ló, lo, Benedek Rita, lovasoktatás, lovasoktatas"}
                url={"/Form"}
            />
            <section className={styles.contactPage}>
                <article className={styles.contactForm}>
                    <h1>Jelentkezés Lovaglásra</h1>
                    <p> Ha szívesen jönnél hozzánk lovagolni kérlek töltsd ki ezt a formot, és mi felvesszük veled a
                        kapcsolatot.
                        Lovaglás csak előre egyeztetett időpontban lehetséges.
                    </p>
                    <form
                        method={"POST"}
                        data-netlify={"true"}
                        >
                        <div className={styles.formGroup}>
                            <input type="text" name="LNAME" id="mce-LNAME" required
                                   className={styles.formControl} placeholder="Vezetéknév"/>
                            <input type="text" name="FNAME" id="mce-FNAME" required
                                   className={styles.formControl} placeholder="Keresztnév"/>
                            <input type="email" name="EMAIL" id="mce-EMAIL" required
                                   className={styles.formControl} placeholder="Email"/>
                            <input type="text" name="MMERGE3" id="mce-MMERGE3" required
                                   className={styles.formControl} placeholder="Telefonszám (+36701234567)"/>
                            <input type="textarea" name="MMERGE4" id="mce-MMERGE4" rows="5"
                                   placeholder="Megjegyzés" className={styles.formControl}/>
                            <div className={styles.links}>
                                <p>Kérlek töltsd ki az alábbi nyilatkozatokat és hozdd magaddal az első lovaglásra vagy
                                    küldd el e-mailben az alábbi emailcímre: tucsoklovasudvar@gmail.com
                                    Nyilatkozat hiányában a lovaglás nem lehetséges!
                                </p>
                                <a href={felnott} download>
                                    Felnőtt nyilatkozat
                                </a>
                                <br/>
                                <a href={gyerek} download>
                                    Gyerek nyilatkozat
                                </a>
                                <br/>
                                <a href={adatvedelem} download>
                                    Adatvédelmi nyilatkozat
                                </a>
                            </div>
                            <div>
                                <Button
                                    variant="outlined"
                                    onClick={handleClickOpen}
                                    style={{
                                        border: "none"
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
                                            Hozzájárulok, hogy Benedek Rita (Tücsök Lovasudvar, ev.ig.sz.: 44681302),
                                            lovasoktatás, edzés,
                                            lovastábor, lovakkal való foglalkozás során a szülői nyilatkozat
                                            kitöltésével a személyes adataimat
                                            felvegye, tárolja.
                                            Tudomásul veszem, hogy minden rólam felvett adat a GDPR előírásainak
                                            megfelelően kerül kezelésre
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
                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                                <input
                                    type="text"
                                    name="b_8d29b6f027a19d427131d32dd_f203cbe20b"
                                    tabIndex="-1"
                                    value=""
                                />
                            </div>
                            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className={`${styles.submitBtn} ${styles.btn}`}>
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
/*
 <form
                        action="https://gmail.us5.list-manage.com/subscribe/post?u=8d29b6f027a19d427131d32dd&amp;id=f203cbe20b"
                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
                        <div className={styles.formGroup}>
                            <input type="text" name="LNAME" id="mce-LNAME" required
                                   className={styles.formControl} placeholder="Vezetéknév"/>
                            <input type="text" name="FNAME" id="mce-FNAME" required
                                   className={styles.formControl} placeholder="Keresztnév"/>
                            <input type="email" name="EMAIL" id="mce-EMAIL" required
                                   className={styles.formControl} placeholder="Email"/>
                            <input type="text" name="MMERGE3" id="mce-MMERGE3" required
                                   className={styles.formControl} placeholder="Telefonszám (+36701234567)"/>
                            <input type="textarea" name="MMERGE4" id="mce-MMERGE4" rows="5"
                                   placeholder="Megjegyzés" className={styles.formControl}/>
                            <div className={styles.links}>
                                <p>Kérlek töltsd ki az alábbi nyilatkozatokat és hozdd magaddal az első lovaglásra vagy
                                    küldd el e-mailben az alábbi emailcímre: tucsoklovasudvar@gmail.com
                                    Nyilatkozat hiányában a lovaglás nem lehetséges!
                                </p>
                                <a href={felnott} download>
                                    Felnőtt nyilatkozat
                                </a>
                                <br/>
                                <a href={gyerek} download>
                                    Gyerek nyilatkozat
                                </a>
                                <br/>
                                <a href={adatvedelem} download>
                                    Adatvédelmi nyilatkozat
                                </a>
                            </div>
                            <div>
                                <Button
                                    variant="outlined"
                                    onClick={handleClickOpen}
                                    style={{
                                        border: "none"
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
                                            Hozzájárulok, hogy Benedek Rita (Tücsök Lovasudvar, ev.ig.sz.: 44681302),
                                            lovasoktatás, edzés,
                                            lovastábor, lovakkal való foglalkozás során a szülői nyilatkozat
                                            kitöltésével a személyes adataimat
                                            felvegye, tárolja.
                                            Tudomásul veszem, hogy minden rólam felvett adat a GDPR előírásainak
                                            megfelelően kerül kezelésre
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
                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                                <input
                                    type="text"
                                    name="b_8d29b6f027a19d427131d32dd_f203cbe20b"
                                    tabIndex="-1"
                                    value=""
                                />
                            </div>
                            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className={`${styles.submitBtn} ${styles.btn}`}>
                                Küldés
                            </button>
                        </div>
                    </form>*/