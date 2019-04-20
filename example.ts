Object.defineProperty(window, 'MySweetApp', {value: 'v1.0.0', writable: true});

function deliveryMethod(): string {
    // TODO
    return 'overnight';
}

function shipWeight(): number {
    const el: HTMLElement | null = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML);
}

function sendUpdates(emailAddr: string | string[]): void {
    function sendEmail(addr: string): void {
        // Default to standard delivery if empty
        console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

        if (shipWeight() > 100) {
            console.log('WARNING: Oversize package');
        }
    }

    // If it's an array, loop over it
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string, _idx: number) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
