basic.forever(function () {
	//% color=190 weight=100 icon="\uf1ec" block="Motorsteuerung"
	namespace Motosteuerung {
		//% blockId=Motorvortrieb
		//% block="Motor"
		export function motorkraft():void{
			let Antrieb_links
			let Antrieb_rechts
			const Minimal_Antrieb
			pins.analogWritePin(AnalogPin.P1; Math.map(Antrieb_links, 0, 50, Minimal_Antrieb, 1023))
			pins.analogWritePin(AnalogPin.P2; Math.map(Antrieb_rechts, 0, 50, Minimal_Antrieb, 1023))
		}
	}
	
})
