// let person = {
//     fitsName: 'Igor',
//     age: 33
// }
//
// function userMessage([start, end]: TemplateStringsArray, templateObj: typeof person): string {
//     return `${start}${templateObj.fitsName}${end}`;
// }
//
// console.log(userMessage`Good day, ${person} !!`);

function sleep(ms: number): Promise<void> {
    return new Promise<void>((resolve: Function) => {
        setTimeout(resolve, ms);
    });
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(1500);
        yield item;
    }
}


export async function skipLikeSloth2(items: string[]): Promise<void> {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}


