<template>
  <div class="w-screen">
    <section ref="firstSection" class="relative h-screen w-screen overflow-hidden">
      <NuxtImg
        class="h-full w-full object-cover"
        fit="cover"
        src="/img/background.png"
        alt="background"
        format="webp"
        preload
      />
      <div class="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
        <div class="flex w-3/4 flex-col items-center justify-center">
          <h1 class="text-white">Thanh Sắc Việt</h1>
          <div class="subtitle text-center text-white">
            "Một không gian số khám phá văn hóa Việt Nam qua lăng kính hiện đại – nhịp cầu nối giữa
            quá khứ và hiện tại, nơi những âm vang ngàn đời của dân tộc được chắt lọc và lan toả”
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 flex h-32 w-full items-center justify-center">
        <LazyScrollDown />
      </div>
    </section>

    <section>
      <div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos explicabo
          facilis hic itaque maxime modi pariatur reiciendis rem ut. Commodi culpa ex exercitationem
          hic minus non optio similique voluptatum.
        </div>
        <div>
          Aliquam amet commodi, delectus dolorem enim est impedit ipsam ipsum, laborum libero
          nostrum odio officia pariatur possimus quam quasi soluta, unde! Atque deserunt ipsa nam
          nihil pariatur. Impedit, rerum, tempore.
        </div>
        <div>
          Aperiam culpa cum cumque distinctio dolore doloribus ducimus ea est expedita impedit iste
          laborum libero magnam, molestias nobis officia pariatur perferendis quam quos recusandae
          similique sunt, veritatis! Officia, quis, vel!
        </div>
        <div>
          Ab, assumenda cupiditate deleniti dignissimos dolore dolorem ducimus ea inventore, ipsam
          laborum nisi odit officia provident quae quo ratione saepe totam, ullam? Asperiores
          blanditiis consequatur cum cupiditate ducimus officiis unde?
        </div>
        <div>
          Beatae delectus ducimus facere officia officiis quaerat quidem voluptatum? Architecto
          autem cumque deleniti doloribus eveniet fugiat libero magnam necessitatibus, nihil, non
          numquam odit omnis quaerat quidem, soluta tenetur totam vel!
        </div>
        <div>
          In possimus reiciendis temporibus? Architecto atque autem blanditiis consequuntur, earum,
          ex ipsa mollitia nemo nobis optio possimus quae recusandae sunt unde ut velit voluptatem.
          Assumenda blanditiis hic laboriosam nihil voluptatibus!
        </div>
        <div>
          Cumque officia possimus quis ratione. Hic nobis possimus repellendus soluta vitae
          voluptate, voluptatum! Alias, animi distinctio eaque facilis harum unde voluptatum.
          Asperiores facilis mollitia nihil sint soluta! Distinctio, earum, in?
        </div>
        <div>
          Aliquid earum fuga ipsam molestias repellendus similique tempora tempore totam? Accusamus
          delectus, eos excepturi minima quidem quos tempora! Adipisci dolor iste natus, numquam
          officia officiis pariatur quis unde ut voluptate!
        </div>
        <div>
          Cumque delectus dolor, doloribus et impedit iusto molestiae molestias nihil non qui
          veniam, veritatis voluptatibus! Architecto illum itaque placeat possimus vitae! Amet
          consectetur nemo non quaerat recusandae rerum tempora tempore!
        </div>
        <div>
          Dolor doloremque dolores repudiandae! Ab aliquid aspernatur atque doloribus, ducimus eaque
          facere, fugiat hic ipsum obcaecati quam quos reiciendis reprehenderit, similique sit
          soluta voluptatum! Dolorum omnis placeat quas sint. Nemo?
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
  const firstSection = useTemplateRef<HTMLElement>('firstSection')
  const isFirstSectionVisible = useElementVisibility(firstSection)
  const navBar = ref<HTMLElement | null>(null)

  useRuntimeHook('page:finish', () => {
    navBar.value = document.getElementById('baseNavBar')
  })

  watchEffect(() => {
    if (isFirstSectionVisible.value) {
      navBar.value?.classList.remove('!bg-black', '!text-white')
    } else {
      navBar.value?.classList.add('!bg-black', '!text-white')
    }
  })
</script>
