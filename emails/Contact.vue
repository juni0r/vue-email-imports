<script setup lang="ts">
import type { Contact } from '~/lib/contact'

defineProps<Contact>()
</script>

<template>
  <EHtml>
    <EHead />
    <EPreview>{{ message }}</EPreview>
    <EBody>
      <EText>
        {{ name }} sent you a message:
      </EText>
      <EText>
        {{ message }}
      </EText>
    </EBody>
  </EHtml>
</template>
