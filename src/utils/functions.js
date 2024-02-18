

export const getBoxValue = object => Object.values(object).join(' ');

export const tabController = () => {
    setTimeout(() => {
        const panelBodies = document.querySelectorAll('.components-panel__body-title button');
        panelBodies.forEach(item => {
            item.addEventListener('click', clickEveryItem);
        });

        function clickEveryItem() {
            this.removeEventListener('click', clickEveryItem);
            panelBodies.forEach(item => {
                if (item.getAttribute('aria-expanded') === 'true' && !item.isEqualNode(this)) {
                    item.click();
                }
            });
            setTimeout(() => {
                this.addEventListener('click', clickEveryItem);
            }, 500);
        }
    }, 500);
};


const defaultTheme = {
    labelTypo: { fontSize: 18, fontWeight: 400 },
    labelColor: '#000',
    inputTypo: { fontSize: 18, fontWeight: 400, fontFamily: "Arial, sans-serif", lineHeight: "175%" },
    inputColors: { color: "#000000a1", bg: "#fff" },
    btnBorder: { width: "0px", style: "solid", color: "#000" },
    btnIcon: { color: '#fff', size: 24 },
    btnTypo: { fontSize: 18, fontWeight: 400, fontFamily: "Arial, sans-serif", lineHeight: "135%" },
    btnColors: { color: "#fff", bg: '#5784f5' },

}

export const checkForm = (val) => {
    if (val === 'default') {
        return {
            ...defaultTheme,
            inputPadding: { top: '5px', right: '5px', bottom: '5px', left: '5px' },
            inputBorder: { width: "1px", style: "solid", color: "#000", radius: "5px" },
            btnPadding: { top: '10px', right: '20px', bottom: '10px', left: '20px' },
            btnBorder: { radius: "10px" },
        };
    }
    else if (val === 'form1') {
        return {
            ...defaultTheme,
            inputPadding: { top: '5px', right: '5px', bottom: '5px', left: '5px' },
            inputBorder: { width: "1px", style: "solid", color: "#000", radius: "50px" },
            btnPadding: { top: '10px', right: '20px', bottom: '10px', left: '20px' },
            btnBorder: { radius: "50px" }
        }
    }

    else if (val === 'form2') {
        return {
            ...defaultTheme,
            inputColors: { color: "#000000a1", bg: "#fff" },
            inputPadding: { top: '10px', right: '10px', bottom: '10px', left: '10px' },
            inputBorder: { width: "0px", style: "solid", color: "#000", radius: "5px" },
            btnPadding: { top: '10px', right: '20px', bottom: '10px', left: '20px' },
            btnBorder: { radius: "5px" }
        }
    }

    else if (val === 'form3') {
        return {
            ...defaultTheme,
            inputPadding: { top: '7px', right: '10px', bottom: '7px', left: '10px' },
            inputBorder: { width: "1px", style: "solid", color: "#000", radius: "10px" },
            btnPadding: { top: '8px', right: '70px', bottom: '8px', left: '70px' },
            btnBorder: { radius: "10px" }
        }
    }
}