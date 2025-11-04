// File: 04-core-code/ui/left-panel-input-handler.js

import { EVENTS, DOM_IDS } from '../config/constants.js';

/**
 * @fileoverview 
A dedicated input handler for all user interactions within the Left Panel.
 */
export class LeftPanelInputHandler {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        console.log("LeftPanelInputHandler Initialized.");
    }

    initialize() {
        this._setupNavigationToggle();
        this._setupTabButtons();
        // [REMOVED] _setupK1Inputs() call moved to K1TabInputHandler
        // [REMOVED] _setupK2Inputs() call moved to K2TabInputHandler
        // [REMOVED] _setupK3Inputs() call moved to K3TabInputHandler
        // [REMOVED] _setupK4Inputs() (K5 logic) call moved to K5TabInputHandler
        // [REMOVED] _setupK5Inputs() (K4 logic) call moved to K4TabInputHandler
    }

    _setupNavigationToggle() {
        const leftPanelToggle = document.getElementById(DOM_IDS.LEFT_PANEL_TOGGLE);
        if (leftPanelToggle) {
            leftPanelToggle.addEventListener('click', () => {
                this.eventAggregator.publish(EVENTS.USER_NAVIGATED_TO_DETAIL_VIEW);
            });
        }
    }

    _setupTabButtons() {
        const tabContainer = document.querySelector('#left-panel .tab-container');
        if (tabContainer) {
            tabContainer.addEventListener('click', (event) => {
                const target = event.target.closest('.tab-button');
                if (target && !target.disabled) {

                    this.eventAggregator.publish(EVENTS.USER_SWITCHED_TAB, { tabId: target.id });
                }
            });
        }
    }

    // [REMOVED] _setupK1Inputs() method has been cut and moved to K1TabInputHandler.

    // [REMOVED] _setupK2Inputs() method has been cut and moved to K2TabInputHandler.

    // [REMOVED] _setupK3Inputs() method has been cut and moved to K3TabInputHandler.

    // [REMOVED] _setupK4Inputs() method (K5 logic) has been cut and moved to K5TabInputHandler.

    // [REMOVED] _setupK5Inputs() method (K4 logic) has been cut and moved to K4TabInputHandler.
}