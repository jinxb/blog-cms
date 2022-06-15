import { App } from 'vue'

import 'element-plus/dist/index.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink
} from 'element-plus/lib/components'
// 图标
import { Avatar, Iphone } from '@element-plus/icons-vue'
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  Avatar,
  Iphone
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
