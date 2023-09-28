import { defineCustomElement } from 'vue'
import chat from './chat-widget.ce.vue'

const element = defineCustomElement(chat);
customElements.define("chat-widget", element);
