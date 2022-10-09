import {ref} from "vue";

const value = ref('')
const shortcuts = [
    {
        text: 'Today',
        value: new Date(),
    },
    {
        text: 'Yesterday',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
        },
    },
    {
        text: 'A week ago',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
        },
    },
]
const disabledDate = (time) => {
    return time.getTime() > Date.now()
}
export default () => {
    return {
        disabledDate, value, shortcuts
    }
}