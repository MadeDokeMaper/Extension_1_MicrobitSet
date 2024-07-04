namespace Motorsteuerung {
    //% blockId=Motorvortrieb
    //% block="Motor %linksKraft %rechtsKraft"
    //% color=130 weight=100 icon="\uf1ec"
    //% linksKraft.min=-10 linksKraft.max=10
    //% rechtsKraft.min=-10 rechtsKraft.max=10
    export function motorkraft1(linksKraft: number, rechtsKraft: number): void {
        let Antrieb_links
        let Antrieb_rechts
        const Minimal_Antrieb =300
        Antrieb_links = linksKraft
        Antrieb_rechts = rechtsKraft
        pins.analogWritePin(AnalogPin.P1, Math.map(Antrieb_links, 0, 50, Minimal_Antrieb, 1023))
        pins.analogWritePin(AnalogPin.P2, Math.map(Antrieb_rechts, 0, 50, Minimal_Antrieb, 1023))

    }

}
namespace Sensorsteuerung {
    //% blockId=Sensorsteuerung
    //% block="Sensorsteuerung"


}
